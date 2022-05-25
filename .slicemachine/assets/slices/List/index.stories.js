import MyComponent from '../../../../slices/List';

export default {
  title: 'slices/List'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"list","items":[{"listItem":[{"type":"paragraph","text":"Sit excepteur reprehenderit deserunt ex. Eiusmod cupidatat velit irure.","spans":[]}]},{"listItem":[{"type":"paragraph","text":"Ad reprehenderit amet velit nisi laboris deserunt anim sit irure enim. Cupidatat laboris officia culpa duis.","spans":[]}]},{"listItem":[{"type":"paragraph","text":"Ad velit fugiat amet occaecat dolore culpa do esse et quis quis sint eu do amet.","spans":[]}]},{"listItem":[{"type":"paragraph","text":"Minim nulla nulla ea sunt cupidatat cillum veniam nisi commodo veniam dolor consectetur pariatur enim. Ex aliquip voluptate labore dolore anim aliqua pariatur culpa. Lorem sunt irure enim pariatur minim enim ex velit culpa do consequat eiusmod anim.","spans":[]}]}],"primary":{},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _ListWithImage = () => <MyComponent slice={{"variation":"listWithImage","name":"List - With Image","slice_type":"list","items":[{"listItem":[{"type":"paragraph","text":"Sint aliquip anim nostrud. Qui non ut elit dolore adipisicing. Duis ea tempor cupidatat laborum occaecat tempor esse veniam.","spans":[]}]},{"listItem":[{"type":"paragraph","text":"Magna minim officia pariatur sit laboris dolore.","spans":[]}]},{"listItem":[{"type":"paragraph","text":"Minim laborum minim amet cillum ea reprehenderit veniam laboris.","spans":[]}]},{"listItem":[{"type":"paragraph","text":"Sunt nisi est non sit nisi ipsum mollit magna mollit ad duis est velit. Aliqua ea labore sunt in tempor non ea proident.","spans":[]}]}],"primary":{"image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/roysheppard/8e003c6f-3cd2-4f87-bde9-b885e7344fa9_freelance-web-designer.png?w=null&h=null&fit=crop"}},"id":"_ListWithImage"}} />
_ListWithImage.storyName = 'List - With Image'
