export default {
  elements: [
    { // node a
      data: { id: 'a' }
    }, { // node b
      data: { id: 'b' }
    }, { // edge ab
      data: { id: 'ab', source: 'a', target: 'b' }
    },
    {
      data: { id: 'red1' },
      classes: 'red'
    },
    {
      data: {
        id: 12,
        source: 'b',
        target: 'red1'
      }
    }
  ],
  style: [
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        'label': 'data(id)'
      }
    },
    {
      selector: '.red',
      style: {
        'background-image': 'https://farm8.staticflickr.com/7272/7633179468_3e19e45a0c_b.jpg'
      }
    }, {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    }
  ],
  layout: {
    name: 'grid',
    rows: 1
  },
  zoom: 1
}
