import axios from "axios";

async function viaCep(req, res, next) {
  const { cep } = req.body;

  if (!cep) {
    return res.status(400).json({ error: "CEP is required" });
  }

  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (response.data.erro) {
      return res.status(400).json({ error: "Invalid CEP" });
    }

    req.body.address = `${response.data.logradouro}, ${response.data.bairro}, ${response.data.localidade} - ${response.data.uf}`;

    next();
  } catch (error) {
    return res.status(500).json({ error: "Error fetching address from ViaCEP" });
  }
};

export default viaCep;