import React from 'react'
import {SEO} from '../components';
import {Button, Purchase} from '../styles/components'
import {Link} from 'gatsby'

export default function Error() {
  return (
    <div>
      <SEO title='Error' />
      <Purchase>
        <h2>Oops! ocurrio un error</h2>
        <p>Lo sentimos, pero ocurrio un error inesperado</p>
        <p>Por favor intente de nuevo</p>
        <span role='img' aria-label='emoji'>😥</span>
        <Link to='/'>
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
