'use client'
import Naviguation from './components/Naviguation'
import {ConfigProvider} from 'antd'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import themeConfig from '../theme/themeConfig'
import { AntdRegistry } from '@ant-design/nextjs-registry'


export default function RootLayout({ children }) {
  return (
    <html lang="fr" >
      <body>
         {/* Redux Provider — accès au store global */}
        <Provider store={store}>
           {/* Ant Design Provider — thème global */}
          <AntdRegistry>
              <Naviguation/>
          <ConfigProvider theme={themeConfig}>
            {children}
          </ConfigProvider>
          </AntdRegistry>
          
        </Provider>
      </body>
      
    </html>
  );
}
