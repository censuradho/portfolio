'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button, SuccessDialog } from '@/components'
import styles from './styles.module.css'
import { ContactProps } from './types'

import { TextInputForm } from '@/components/hook-form'
import { TextareaForm } from '@/components/hook-form/textarea'
import { useToggle } from '@/hooks'
import { localApiService } from '@/services/local-api'
import { ContactFormData, contactSchemaValidation } from './validation'

export function Contact ({ data }: ContactProps) {
  const [isOpen, toggle] = useToggle()
  const [isLoading, toggleLoading] = useToggle()

  const { 
    register,
    formState: { errors },
    handleSubmit, 
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchemaValidation),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      toggleLoading()
      await localApiService.contact(data)
      toggle()
    } finally {
      toggleLoading()
    }
  }

  return (
    <div className="container-sm">
      <SuccessDialog
        title="Enviado com sucesso!"
        description="Assim que possível te retorno o email 😉"
        open={isOpen}
        onOpenChange={toggle} 
      />
      <section className={styles.contact}>
        <h2 className={styles.contact__title}>Quer falar comigo?</h2>
        <a
          className={styles['contact__cta-email']}
          rel="noreferrer" 
          href={`mailto:${data.email}`}>{`✉️ ${data.email}`}</a>
        <p>Ou Preencha o formulário abaixo 👇</p>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.contact__form}>
          <TextInputForm
            id="name"
            label="Nome"
            placeholder="Seu nome ou da empresa"
            errorMessage={errors?.name?.message}
            register={register('name')}
          />
          <TextInputForm
            id="email"
            label="E-mail"
            placeholder="exemplo@email.com"
            errorMessage={errors?.email?.message}
            register={register('email')}
          />
          <TextInputForm
            id="whatsapp"
            label="whatsapp"
            placeholder="DDD + Número"
            errorMessage={errors?.whatsapp?.message}
            register={register('whatsapp')}
          />
          <TextareaForm
            id="message"
            label="Mensagem"
            register={register('message')}
            errorMessage={errors?.message?.message}
            placeholder="No que posso te ajudar?"
          />
          <div style={{ marginTop: '2rem', width: '100%' }}>
            <Button 
              type="submit" 
              fullWidth
              loading={isLoading}
            >Enviar</Button>
          </div>
        </form>
      </section>
    </div>
  )
}