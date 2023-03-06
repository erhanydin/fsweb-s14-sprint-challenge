/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  // await knex('table_name').insert([
  //   {id: 1, colName: 'rowValue1'},
  //   {id: 2, colName: 'rowValue2'},
  //   {id: 3, colName: 'rowValue3'}
  // ]);

  const defaultProjects = [
    {
      project_name: "Project name ex. 1",
      project_description: "Project description ex. 1"
    },
    {
      project_name: "Project name ex. 2",
      project_description: "Project description ex. 2"
    },
    {
      project_name: "Project name ex. 3",
      project_description: "Project description ex. 3"
    },
    {
      project_name: "Project name ex. 4",
      project_description: "Project description ex. 4"
    },
  ];
  const defaultResources = [
    {
      resource_name: "Resource name ex. 1",
      resource_description: "Resource description ex. 1"
    },
    {
      resource_name: "Resource name ex. 2",
      resource_description: "Resource description ex. 2"
    },
    {
      resource_name: "Resource name ex. 3",
      resource_description: "Resource description ex. 3"
    },
    {
      resource_name: "Resource name ex. 4",
      resource_description: "Resource description ex. 4"
    },
  ];
  const defaultTasks = [
    {
      task_description: "task name ex. 1",
      task_notes: "task description ex. 1",
      project_id: 1
    },
    {
      task_description: "task name ex. 2",
      task_notes: "task description ex. 2",
      project_id: 1
    },
    {
      task_description: "task name ex. 3",
      task_notes: "task description ex. 3",
      project_id: 2
    },
    {
      task_description: "task name ex. 4",
      task_notes: "task description ex. 4",
      project_id: 3
    },
  ];
  const defaultProjects_Resources = [
    {
      project_id: 1,
      resource_id: 1
    },
    {
      project_id: 2,
      resource_id: 1
    },
    {
      project_id: 2,
      resource_id: 2
    },

  ];

  await knex("projects").insert(defaultProjects);
  await knex("resources").insert(defaultResources);
  await knex("tasks").insert(defaultTasks);
  await knex("project_resources").insert(defaultProjects_Resources);
};
