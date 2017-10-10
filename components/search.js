import { Search } from 'semantic-ui-react'

export default ({ userName }) => {
  return (
    <div>
      <Search loading={false} placeholder='Søk etter elev...' />
      <p style={{paddingTop: '20px'}}>Søk frem elever ved å skrive hele, eller deler av, navnet i søkefeltet.</p>
      <p>Fra siden med søkeresultater kan du sende varsler og dokumentere elevsamtaler, eller se oversikt over tidligere dokumenter.</p>
      <style jsx>
        {`
          p {
            font-size: 16px
          }
        `}
      </style>
    </div>
  )
}
