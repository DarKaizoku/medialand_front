export default function AddCategorie() {
    return (
        <>
            <option data-bs-toggle="modal" data-bs-target="#categorieModal">
                Ajouter une catégorie...
            </option>

            <div
                className="modal fade"
                id="categorieModal"
                tabIndex={-2}
                aria-labelledby="categorieModalLabel"
                aria-hidden="true"
            >
                <div>123</div>
            </div>
        </>
    )
}
