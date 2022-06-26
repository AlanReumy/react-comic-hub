import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import 'normalize.css'
import 'antd/dist/antd.css'
import './assets/style/public.css'
import App from './App'
import HomePage from './page/HomePage'
import ChapterPage from './page/ChapterPage'
import ContentPage from './page/ContentPage'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index path="/home" element={<HomePage />} />
            <Route path="/chapter/:cartoonId" element={<ChapterPage />} />
            <Route
              path="/content/:chapterId/:chapterName"
              element={<ContentPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>
)
