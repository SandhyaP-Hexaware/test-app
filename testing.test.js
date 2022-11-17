const request=require('supertest')
const app=require('./app')

test('should get',async()=>{
    await request(app).get('/').expect(201)
})
