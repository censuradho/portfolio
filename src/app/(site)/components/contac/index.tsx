'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, TextInput } from '@/components'
import styles from './styles.module.css'
import { ContactProps } from './types'

import { ContactFormData, contactSchemaValidation } from './validation'
import { TextInputForm } from '@/components/hook-form'
import { Textarea } from '@/components/form'

export function Contact ({ data }: ContactProps) {
  const { 
    register,
    formState: { errors },
    handleSubmit, 
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchemaValidation)
  })

  const onSubmit = async (data: ContactFormData) => {

  }

  return (
    <div className="container-sm">
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
          <Textarea 
            label="Mensagem"
          />
          <div style={{ marginTop: '2rem', width: '100%' }}>
            <Button type="submit" fullWidth>Enviar</Button>
          </div>
        </form>
      </section>
    </div>
  )
}