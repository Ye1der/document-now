import React from 'react'

// de momento no se esta usando en la pagina
export class ErrorBoundary extends React.Component {
  constructor(props: object) {
    super(props)
    this.state = {
      hasError: false,
      messageError: '',
    }
  }
}
