const request = require('supertest');
const server = require('../app');

describe('Operaciones CRUD de productos', () => {
  //Test GET productos
  it('Testeando ruta GET /productos', async () => {
    const { body: productos, statusCode: status } = await request(server)
      .get('/productos')
      .send();

    //Revisar codigo 200
    expect(status).toBe(200);
  });
});
