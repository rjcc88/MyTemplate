export default build =>
  build.query({
    query: (page=1,id) => `/obr-dv-list?page=${page}&${id}`,
    // providesTags: (result, error, id) => [{ type: 'Posts', id }],
  })