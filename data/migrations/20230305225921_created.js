/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable("projects", (table) => {
            table.increments("project_id") // proje id'si primary key
            table.string("project_name").notNullable() // proje adı - boş olamaz
            table.string("project_description") // proje açıklaması - isteğe bağlı
            table.boolean("project_completed").defaultTo(false) // proje tamamlandı bilgisi - varsayılan değeri 'false'
        })

        .createTable("resources", (table) => {
            table.increments("resource_id") // kaynak id'si primary key
            table.string('resource_name').notNullable().unique() // kaynak adı - boş olamaz ve eşsiz olmalı
            table.string("resource_description") // kaynak açıklaması - isteğe bağlı
        })

        .createTable("tasks", (table) => {
            table.increments("task_id") // görev id'si primary key
            table.string("task_description").notNullable() // görev açıklaması - boş olamaz
            table.string("task_notes") // görev notları - isteğe bağlı
            table.boolean("task_completed").defaultTo("false") // görev tamamlandı bilgisi - varsayılan değeri 'false'

            table.integer("project_id") // projects tablosun'daki project_id'ye referans verildi
                .notNullable()
                .unsigned()
                .references("project_id")
                .inTable("projects")
                .onDelete("CASCADE") // BAĞLI OLDUĞU TABLODA BİR DEĞİŞİKLİK YAPILDIĞINDA, 
                .onUpdate("CASCADE") // BU TABLODAN DA SİLİNMESİNİ SAĞLAR !!! ÇOK ÖNEMLİ !!!
        })

        .createTable("project_resources", (table) => { // PROJE-KAYNAK İLİŞKİ TABLOSU
            table.increments("project_resource_id")
            table.integer("resource_id")
                .notNullable()
                .unsigned()
                .references("resource_id")
                .inTable("resources")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
            table.integer("project_id")
                .notNullable()
                .unsigned()
                .references("project_id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
        });



};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("projects")
        .dropTableIfExists("project_resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
};
