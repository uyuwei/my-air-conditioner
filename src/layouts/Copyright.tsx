import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import * as pkg from '~/../package.json'

import IconGithub from '~icons/mdi/github'
import IconTelegram from '~icons/mdi/telegram'
import IconSinaWeibo from '~icons/mdi/sina-weibo'
import IconTwitter from '~icons/mdi/twitter'
import IconWechat from '~icons/mdi/wechat'
import IconEarth from '~icons/mdi/earth'
import IconCloud from '~icons/mdi/cloud'

const socialList = [
  {
    type: 'github',
    color: 'inherit',
    icon: IconGithub,
    label: 'GitHub: uyuwei',
    href: 'https://github.com/uyuwei',
  },
  {
    type: 'weibo',
    color: '#DB2828',
    icon: IconSinaWeibo,
    label: '微博：uyuwei',
    href: 'http://weibo.com/uyuwei',
  },
  {
    type: 'twitter',
    color: '#1da1f2',
    icon: IconTwitter,
    label: 'Twitter: uyuwei',
    href: 'https://twitter.com/uyuwei',
  },
  {
    type: 'blog',
    color: '#6435C9',
    icon: IconEarth,
    label: '博客：余慰.中国',
    href: 'http://xn--zqqw45b.xn--fiqs8s/',
  },
]

export const Copyright: React.FC = () => {
  return (
    <div>
      <p className="text-center text-xs">
        {'© '}
        <IconButton
          sx={{ color: '#0078e7' }}
          href="http://xn--zqqw45b.xn--fiqs8s/home/money_receiving_QR_code/"
          target="_blank"
        >
          <IconCloud style={{ fontSize: '1rem' }} />
        </IconButton>
      </p>
      <p className="text-center text-xs">
        {`2019 - ${new Date().getFullYear()}`}
      </p>
      <div className="text-center">
        {socialList.map(item => (
          <Tooltip title={item.label} arrow key={item.type}>
            <IconButton
              sx={{ color: item.color }}
              href={item.href}
              target="_blank"
            >
              <item.icon />
            </IconButton>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}

export default Copyright
