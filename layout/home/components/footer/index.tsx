import { Box, Container, Icon, Typography } from 'components/common'
import Image from 'next/image'
import * as Styles from './styles'

export const whatsAppPath = 'https://api.whatsapp.com/send?phone=5551982397632&text=Ol%C3%A1,%20gostaria%20de%20falar%20sobre%20a%20consultoria%20de%20software'

const categories = [
  {
    title: 'Fale conosco',
    items: [
      {
        label: '(51) 9 8239-7632',
        icon: 'whatsapp',
        link: whatsAppPath
      },
      {
        label: 'develo.front@gmail.com',
        icon: 'mail',
        link: 'mailto:develo.front@gmail.com?subject=Consultoria de software&body=Olá gostaria de falar sobre a consultoria de software'
      },
      {
        label: 'Porto Alegre',
        icon: 'location'
      }
    ]
  }
]

export function Footer () {
  const renderCategories = categories.map((categorie, index) => {

    const renderItems = categorie.items.map((item, index) => (
      <Styles.Item key={index}>
        <Icon name={item.icon as any} size={20} color="ancesst8" />
        {!item.link && <span>{item.label}</span>}
        {item.link && <a href={item.link}>{item.label}</a>}
        
      </Styles.Item>
    ))

    return (
      <Box key={index} flexDirection="column" gap={1}>
        <Typography color="heading" size="sm">{categorie.title}</Typography>
        <Styles.List>{renderItems}</Styles.List>
      </Box>
    )
  })

  return (
    <Styles.Footer>
      <Container>
        <Box flexDirection="column">

          <Box
            gap={2} 
            flexDirection={{
              '@initial': 'column',
              '@table-min': 'row'
            }}>
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
            {renderCategories}
    
          </Box>
          <Box marginTop={2}>
            <Typography size="xsm" color="text">Copyright © 2023 Estúdio Prisma. All rights reserved.</Typography>
          </Box>
        </Box>
      </Container>
    </Styles.Footer>
  )
}