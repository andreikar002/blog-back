import { Router } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Publication from 'App/Models/Publication'

export default class TestsController {
  public async get({ response, params }: HttpContextContract) {
    const publication = await Publication.findBy('id', params.id)

    if (publication) {
      return response.ok(publication)
    }
    return response.notFound()
  }

  public async list({ response }: HttpContextContract) {
    const publications = await Publication.all()
    return response.ok(publications)
  }


  public async create({ request, response }: HttpContextContract) {
      var publication = new Publication()
      publication.title = request.input('title')
      publication.content = request.input('content')
      publication.author = request.input('author')
      await publication.save()

      return response.created()
  }
  
  public async update({ request, response, params }: HttpContextContract) {
    const publication = await Publication.findBy("id", params.id)
    if(publication){
      publication.title = request.input('title')
      publication.content = request.input('content')
      publication.author = request.input('author')
      await publication.save()
      return response.created()
    }
  }
  public async search({ response, request }: HttpContextContract) {
    const title = request.input('title')
    const publication = await Publication.findBy('title', title)
    if (publication) {
      return response.ok(publication)
    }
    return response.notFound()
  }
  public async delete({ response, params }: HttpContextContract) {
    const publication = await Publication.findBy('id', params.id)

    if (publication) {
      publication.delete()
    }
    return response.notFound()
  }
}