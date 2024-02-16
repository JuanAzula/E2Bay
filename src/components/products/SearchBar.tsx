import { Link } from 'react-router-dom'
import { useSearch } from '../../hooks/useSearch'
import { useEffect } from 'react'

function SearchBar ({ products }) {
  const { setSearchTerms, searchProducts, searchedProducts, searchTerms } = useSearch()

  const handleSearch = (e) => {
    const searchTerm = e.target.value
    if (searchTerm && searchTerm !== '') {
      console.log(searchTerm)
      setSearchTerms(searchTerm)

      searchProducts(products)
    }
    console.log(products)
    console.log(searchedProducts)
  }
  useEffect(() => {
    if (searchTerms && searchTerms !== '') {
      setSearchTerms(searchTerms)
      searchProducts(products)
      console.log('d')
    }
  }, [searchTerms, setSearchTerms, searchProducts, products])
  return (
        <div className="searchbar">
            <input type="search" onChange={handleSearch} />
            {searchedProducts && searchedProducts.length > 0 && (
                <ul>
                    {searchedProducts.map((product) => (
                        <li key={product.id}>
                            {/* Use Link to navigate to the product detail route */}
                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
  )
}

export default SearchBar
