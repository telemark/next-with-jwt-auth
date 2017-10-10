import React from 'react'
import Page from '../components/page'
import { Table } from 'semantic-ui-react'

const Help = () => {
  return (
    <Table celled striped style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>
            Spørsmål og svar
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            Hvor finner jeg elevmappene?
          </Table.Cell>
          <Table.Cell>
            Du har tilgang til ElevMappa360.
           <br />
            Du må være pålogget Telemark fylkeskommune sitt nettverk for få tilgang til ElevMappa360.
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export default Page(Help)
