import { Box, Icon, Typography } from 'components/common'
import * as Styles from './styles'
import Image from 'next/image'

const data = [
  {
    companyName: 'CWI',
    description: 'Front-end Developer',
    date: 'Jun 2022 — Jan 2023',
    logo: 'cwi.png'
  },
  {
    companyName: 'Ubistart',
    description: 'Front-end Developer',
    date: 'Jun 2021 — Jun 2022',
    logo: 'ubistart.png'
  },
  {
    companyName: 'Openbox.ai',
    description: 'Front-end Developer',
    date: 'Set 2019 — Jun 2021',
    logo: 'openbox.png'
  },
]

export function Experiences () {
  const renderData = data.map((value, index) => (
    <Styles.Item>
      <Image 
        src={`/companies/${value.logo}`} 
        alt={value.companyName} 
        width={32}
        height={32}
      />
      <Box fullWidth flexWrap="wrap" gap={0.1}>
        <Box flexDirection="column" gap={0.2} flex={1}>
          <Typography as="strong" size="xsm" color="heading">{value.companyName}</Typography>
          <Typography size="xsm">{value.description}</Typography>
        </Box>
        <Typography size="xsm">{value.date}</Typography>
      </Box>
    </Styles.Item>
  ))

  return (
     <Styles.Container>
      <Box gap={0.5} alignItems="center">
        <Icon color="ancesst6" name="briefCase" />
        <Typography as="h3" size="xsm" fontWeight="500">Experiencias</Typography>
      </Box>
      <Styles.List>{renderData}</Styles.List>
     </Styles.Container>
  )
}