module.exports = {
    attributes: {
        firstName: {
          type: 'string',
          require: true,
        },
        lastName: {
          type: 'string',
          require: true,
        },
        state: {
          type: 'string',
          required: true,
        },
        party: {
          type: 'string',
          require: true,
        },
        phone: {
          type: 'string'
        },
        fax: {
          type: 'string'
        },
        email: {
          type: 'email',
          require: true,
        },
        title: {
          type: 'string',
          require: true,
        },
        officialId: {
          type: 'string'
        },
 
      }
};
