export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    { 
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    { 
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    { 
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    { 
      name: 'syllabus',
      title: 'Syllabus',
      type: 'string',
    }

  ]
}