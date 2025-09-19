import React, { useState } from 'react'

function StaticCRUD() {
  const [productlist, setProductlist] = useState([])
  const [product, setProduct] = useState({ name: '', price: '', image: '' })
  const [editIndex, setEditIndex] = useState(-1)

  const handleAdd = () => {
    if (!product.name || !product.price || !product.image) {
      alert('All fields are required')
    } else {
      if (editIndex >= 0) {
        const updated = productlist
        updated[editIndex] = product
        setProductlist(updated)
        // setEditIndex(-1)
      } else {
        setProductlist([...productlist,  {...product} ])
      }
    }
    setProduct({ name: '', price: '', image: '' })
  }

  const handleDelete = (index) => {
    const list1 = productlist.slice(0, index)
    const list2 = productlist.slice(index + 1)
    const updatedList = [...list1 , ...list2]
    setProductlist(updatedList)
  }

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="product name"
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        value={product.name}
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="product price"
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        value={product.price}
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="product Image URL"
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
        value={product.image}
      />
      <br />
      <button className="btn btn-primary" onClick={handleAdd}>
        {editIndex >= 0 ? 'Edit Product' : 'Add Product'}
      </button>

      <h3>Product list</h3>
      <table className="table table-active">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productlist.map((prod, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
              <td>
                <img src={prod.image} alt={prod.name} width={50} height={50} />
              </td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => {
                    setProduct(prod)
                    setEditIndex(index)
                  }}
                >
                  Edit
                </button>{' '}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default StaticCRUD
