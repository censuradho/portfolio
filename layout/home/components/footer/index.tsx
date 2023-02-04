import { Box, Container, Icon, Typography } from 'components/common'
import { pathExternals } from 'constants/routes'
import Image from 'next/image'
import * as Styles from './styles'

const categories = [
  {
    title: 'Fale comigo',
    items: [
      {
        label: '(51) 9 8239-7632',
        icon: 'whatsapp',
        link: pathExternals.whatsapp
      },
      {
        label: 'develo.front@gmail.com',
        icon: 'mail',
        link: pathExternals.email
      },
      {
        label: 'Linkedin',
        link: pathExternals.linkdin,
        icon: 'linkedin'
      },
      {
        label: 'Porto Alegre',
        icon: 'location'
      }
    ]
  }
]

export function Footer () {
  const renderCategories = categories.map((category, index) => {

    const renderItems = category.items.map((item, index) => (
      <Styles.Item key={index}>
        <Icon name={item.icon as any} size={20} color="ancesst8" />
        {!item.link && <span>{item.label}</span>}
        {item.link && <a href={item.link}>{item.label}</a>}
        
      </Styles.Item>
    ))

    return (
      <Box key={index} flexDirection="column" gap={1}>
        <Typography color="heading" size="sm">{category.title}</Typography>
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
            <Typography size="xsm" color="text">Copyright © 2023 Gustavo Leite Oliveira. All rights reserved.</Typography>
          </Box>
        </Box>
      </Container>
    </Styles.Footer>
  )
}