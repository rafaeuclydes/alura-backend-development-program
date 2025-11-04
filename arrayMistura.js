const mistura = [42, 'texto', true, { chave: 'valor' }, () => 'função'];

mistura.forEach(item => {
  if (typeof item === 'function') {
    console.log('Executando função:', item());
  } else {
    console.log('Item:', item);
  }
});
