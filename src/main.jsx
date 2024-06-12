import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from "@asgardeo/auth-react";

const config = {
    signInRedirectURL: "http://localhost:5173",
    signOutRedirectURL: "http://localhost:5173",
    clientID: "cJzzCgnbl8fCWMBi9Oa2GyaqIp8a",
    baseUrl: "https://api.asgardeo.io/t/nipunib",
    resourceServerURLs: ["https://bdc81b0c-bae6-43e8-b4aa-0702a82aee77-prod.e1-us-east-azure.choreoapis.dev/animetrix/movie-catalog-service/v1.0/categories"],
    scope: [ "openid", "profile", "internal_login", "internal_user_mgt_view", "app_roles" ]
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider config={ config }>
        <App />
    </AuthProvider>
  </React.StrictMode>,
)
