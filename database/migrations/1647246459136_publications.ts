import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Publications extends BaseSchema {
  protected tableName = 'publications'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("title", 255).notNullable
      table.string("content", 1000000).notNullable
      table.string("author", 100).notNullable
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
