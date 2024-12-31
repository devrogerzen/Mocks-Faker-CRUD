export const info = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'MocksFakerCRUD API',
      version: '1.0.0',
      description: 'API para generar y gestionar datos ficticios de usuarios y mascotas',
      contact: {
        email: 'devrogerzen@gmail.com'
      },
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
      }
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Servidor de desarrollo'
      }
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'ID del usuario'
            },
            username: {
              type: 'string',
              description: 'Nombre de usuario'
            },
            email: {
              type: 'string',
              description: 'Correo electrónico del usuario'
            },
            password: {
              type: 'string',
              description: 'Contraseña del usuario'
            },
            role: {
              type: 'string',
              description: 'Rol del usuario (user o admin)'
            },
            pets: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Lista de mascotas del usuario'
            }
          }
        },
        Pet: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'ID de la mascota'
            },
            name: {
              type: 'string',
              description: 'Nombre de la mascota'
            },
            type: {
              type: 'string',
              description: 'Tipo de mascota (dog, cat, bird)'
            },
            age: {
              type: 'integer',
              description: 'Edad de la mascota'
            }
          }
        }
      }
    },
    paths: {
      '/api/mocks/mockingusers': {
        get: {
          summary: 'Genera 50 usuarios ficticios',
          responses: {
            '200': {
              description: 'Lista de usuarios generados exitosamente',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/User'
                    }
                  }
                }
              }
            }
          }
        }
      },
      '/api/mocks/generateData': {
        post: {
          summary: 'Genera usuarios y mascotas ficticias',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    users: {
                      type: 'integer',
                      description: 'Número de usuarios a generar'
                    },
                    pets: {
                      type: 'integer',
                      description: 'Número de mascotas a generar'
                    }
                  }
                }
              }
            }
          },
          responses: {
            '200': {
              description: 'Usuarios y mascotas generados exitosamente',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      users: {
                        type: 'array',
                        items: {
                          $ref: '#/components/schemas/User'
                        }
                      },
                      pets: {
                        type: 'array',
                        items: {
                          $ref: '#/components/schemas/Pet'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      '/api/mocks/mockingpets': {
        get: {
          summary: 'Genera 50 mascotas ficticias',
          responses: {
            '200': {
              description: 'Lista de mascotas generadas exitosamente',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Pet'
                    }
                  }
                }
              }
            }
          }
        }
      },
      '/api/mocks/users': {
        get: {
          summary: 'Devuelve todos los usuarios almacenados en la base de datos',
          responses: {
            '200': {
              description: 'Lista de usuarios',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/User'
                    }
                  }
                }
              }
            }
          }
        }
      },
      '/api/mocks/pets': {
        get: {
          summary: 'Devuelve todas las mascotas almacenadas en la base de datos',
          responses: {
            '200': {
              description: 'Lista de mascotas',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Pet'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};