export const PaginaUm = ({setPagina}) => {
    return(
        <>
            <h1>Pagina 1</h1>
            <button type="button" onClick={() => setPagina('paginaDois')}>Pagina 2</button>
        </>
    )
}