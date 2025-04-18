import { useState } from 'react'
import AppLayout from './AppLayout'
import MessageComponent from './Components/Message/MessageComponent'
import ContactsComponent from './Components/ContactList/ContactsComponents'

function App() {

  return (
    <AppLayout>
      <ContactsComponent></ContactsComponent>
      <MessageComponent></MessageComponent>
    </AppLayout>
  )
}

export default App
