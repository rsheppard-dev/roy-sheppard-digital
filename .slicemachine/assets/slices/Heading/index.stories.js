import MyComponent from '../../../../slices/Heading';

export default {
  title: 'slices/Heading'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"heading","items":[],"primary":{"slug":"innovate impactful communities","title":[{"type":"heading1","text":"Engineer B2B methodologies","spans":[]}]},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _HeadingDarkBackground = () => <MyComponent slice={{"variation":"headingDarkBackground","name":"Heading - Dark Background","slice_type":"heading","items":[],"primary":{"title":[{"type":"heading1","text":"Repurpose one-to-one metrics","spans":[]}]},"id":"_HeadingDarkBackground"}} />
_HeadingDarkBackground.storyName = 'Heading - Dark Background'
