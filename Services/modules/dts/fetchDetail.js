export default builder =>
builder.query({
    query: (id) => `/obr-tracking-info?${id}`,
  })