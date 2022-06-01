import MyComponent from '../../../../slices/Text';

export default {
  title: 'slices/Text'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"text","items":[],"primary":{"text":[{"type":"heading3","text":"Drive turn-key metrics","spans":[]},{"type":"paragraph","text":"Adipisicing nostrud sunt id laborum non dolor fugiat magna.","spans":[]}],"paddingBottom":"10"},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _TextDarkBackground = () => <MyComponent slice={{"variation":"textDarkBackground","name":"Text - Dark Background","slice_type":"text","items":[],"primary":{"text":[{"type":"paragraph","text":"Pariatur ad labore enim consequat labore magna adipisicing mollit et labore. Ut ea in id dolore cillum.","spans":[]}],"paddingBottom":"20"},"id":"_TextDarkBackground"}} />
_TextDarkBackground.storyName = 'Text - Dark Background'
