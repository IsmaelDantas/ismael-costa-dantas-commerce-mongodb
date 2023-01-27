db.produtos.find({}, {"nome": 1, "qtdVendida": 1}).sort({"qtdVendida": 1})
