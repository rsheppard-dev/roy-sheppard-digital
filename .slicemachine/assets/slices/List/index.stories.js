import MyComponent from '../../../../slices/List';

export default {
  title: 'slices/List'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"list","items":[{"listItem":[{"type":"paragraph","text":"In irure nisi proident non amet ex nostrud eu ex.","spans":[]}]},{"listItem":[{"type":"paragraph","text":"Adipisicing commodo proident consequat adipisicing laboris eiusmod excepteur tempor laboris ipsum aute esse laboris.","spans":[]}]},{"listItem":[{"type":"paragraph","text":"Ullamco voluptate cillum nostrud do. Cillum sit labore qui veniam velit nisi veniam velit reprehenderit irure consequat pariatur ut laborum. Ea laborum sint aute proident.","spans":[]}]},{"listItem":[{"type":"paragraph","text":"Ea proident commodo pariatur ea. Duis in duis commodo officia commodo.","spans":[]}]}],"primary":{},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _ListWithImage = () => <MyComponent slice={{"variation":"listWithImage","name":"List - With Image","slice_type":"list","items":[{"listItem":[{"type":"paragraph","text":"Lorem eiusmod voluptate fugiat aliquip laborum incididunt dolore velit et labore. Veniam sint voluptate laborum.","spans":[]}]},{"listItem":[{"type":"paragraph","text":"Labore sit nostrud reprehenderit cupidatat qui laboris do laborum eu dolor sunt ipsum nostrud aute. Labore magna exercitation dolore deserunt. Fugiat exercitation adipisicing laboris.","spans":[]}]}],"primary":{"image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/roysheppard/8e003c6f-3cd2-4f87-bde9-b885e7344fa9_freelance-web-designer.png?w=null&h=null&fit=crop"}},"id":"_ListWithImage"}} />
_ListWithImage.storyName = 'List - With Image'

export const _ListDarkBackground = () => <MyComponent slice={{"variation":"listDarkBackground","name":"List - Dark Background","slice_type":"list","items":[{"listItem":[{"type":"paragraph","text":"Veniam labore adipisicing elit eiusmod. Aliqua qui incididunt ad minim pariatur sunt. Velit magna ad labore ipsum.","spans":[]}]},{"listItem":[{"type":"paragraph","text":"Duis proident laboris consectetur tempor fugiat occaecat officia consectetur excepteur magna aliquip.","spans":[]}]}],"primary":{},"id":"_ListDarkBackground"}} />
_ListDarkBackground.storyName = 'List - Dark Background'
