let testString = `
      Section .fullWidth .fullHeight
        Title .center .font-size:50px [ Contact Me! ]
        Subtitle .center [ I'm always open to new opportunities ]
  
        Section .fullWidth .halfHeight
          Title .left .mediumFont [ Consulting ]
          Paragraph [
            Have a project that you've always wanted to explore? DevRocket can help with that! We're a team of 3 developers - including myself -
            and we are on the search for great new projects! We have technical expertice in AWS, Docker, Python, PHP, Laravel, Javascript, React, 
            Elm, Elixir, Ruby, Go, Angular, AngularJS, Postgres and MORE. The great thing about DevRocket is the zero middlemen. All the money you
            spend on your project goes straight to development. Yes, that means no more PM Overhead, no more fees, no more $100/hour principle consultants 
            or project managers asking you for unneeded clarification.
          ]
          Paragraph [
            DevRocket has a wide breadth of experience, and we will help you get your project where you want it to go!
          ]
          Paragraph [
            Check us out below
          ]
  
          Section .quarterWidth .border-size-2 .border-black .border-round-corners-small
            Link .url=https://agitated-wiles-874660.netlify.com/ 
              Image .consulting-image .url="./assets/images/devRocket.png"
            Link.
          Section.
        Section.
      Section.
            
    `
let translation = {
  'Section': 'div',
  'Image': 'img',
  'Link': 'a',
  'Paragraph': 'p',
  'Title': 'h1',
  'Subtitle': 'h3',
}
let vDOM = Object.create(null)
let text = ''
let currentObjectPath = []

compileTovaString(testString)

const compileTovaString = (string, data) => {
  console.log("String: ", string)
  // console.log("Data: ", data)

  return tovaStringToHtmlElements(string)
}

const tovaStringToHtmlElements = (tovaString) => {
  let index = 0;
  let isChildBlock = false;
  let isPartOfTextString = false
  let parentIndex = undefined;
  let orderedParts = []

  let filteredArgumentList = tovaString.split(" ").filter(item => item.length >= 1 && item !== '\n')
  
  console.log(filteredArgumentList)

  // for (let index = 0; index < filteredArgumentList.length; index++) {
  //   let item = filteredArgumentList[index].trim()

  //   if (item.length && item !== "\n") {
  //     console.log(item)

  //     if (item[0] === ']') {
  //       filteredArgumentList[parentIndex] += text + " ]"
  //       filteredArgumentList.splice(index, 1)
  //       index -= 1
  //       text = ''
  //       isPartOfTextString = false;
  //       parentIndex = undefined
  //     }

  //     if (isPartOfTextString) {
  //       text += `${item} `
  //       filteredArgumentList.splice(index, 1)
  //       index -= 1
  //     }

  //     if (item[item.length-1] === '[') {
  //       isPartOfTextString = true
  //       parentIndex = index
  //     }

  //   }

  //   console.log(filteredArgumentList)

  // }


  buildVDom(filteredArgumentList, index, isPartOfTextString)

}


const buildVDom = (argumentList, index, isPartOfTextString) => {

  if (index <= argumentList.length - 1) {
    let item = argumentList[index].trim()

    // console.log("Item: ", item)
    console.log("current path: ", currentObjectPath)
    console.log('vDOM: ', vDOM)



    //
    if (translation[item]) {

      if (!Object.keys(vDOM).length) {
        addElementDetails(vDOM, currentObjectPath, {tagname: translation[item], attrs: {}, children: []})
        index += 1
        return buildVDom(argumentList, index)
      }

      currentObjectPath.push('children')
      let childArray = findObject(vDOM, currentObjectPath.length-1, currentObjectPath)
      console.log("childElement: ", childArray.length)
      currentObjectPath.push(childArray.length - 1)
      // currentObjectPath.push(Object.keys(childElement.children).length)
      addElementDetails(vDOM, currentObjectPath, {tagname: translation[item], attrs: {}, children: []})
      index += 1
      return buildVDom(argumentList, index)
    } 

    //
    else if (item == ']') {
      // let childElement = findObject(vDOM, currentObjectPath.length-1, currentObjectPath)
      // addElementDetails(vDOM, currentObjectPath, Object.keys(childElement.children).length + 1, text)
      currentObjectPath.splice(currentObjectPath.length - 2, 2)
      text = ''
      index += 1
      return buildVDom(argumentList, index, false)
    }

    else if (isPartOfTextString) {
      text += `${item} `
      index += 1
      return buildVDom(argumentList, index, true)
    }

    //
    else if (item === '[') {
      // currentObjectPath.push('children')
      index += 1
      return buildVDom(argumentList, index, true)
    }

    //
    else if (item[item.length-1] === '.') {
      currentObjectPath.splice(currentObjectPath.length - 2, 2)
      index += 1
      return buildVDom(argumentList, index, false)
    }

    //
    else if (item[0] === '.') {
      
      if (item.includes('=')) {
        index += 1
        return buildVDom(argumentList, index, false)
      }
      
      addAttrDetails(vDOM, currentObjectPath, 'class', item.slice(1, item.length))
      index += 1
      return buildVDom(argumentList, index, false)
    }

    //
    else {
      console.log('do we do anything here? ', item)
      index += 1
      return buildVDom(argumentList, index, false)
    }
  }
}

const addAttrDetails = (obj, keyPath, AttrType, value) => {
    keyPath.push('attrs')
    keyPath.push(AttrType)
    lastKeyIndex = keyPath.length-1;
    obj = findObject(obj, lastKeyIndex, keyPath)
    if (obj[keyPath[lastKeyIndex]]) obj[keyPath[lastKeyIndex]] = `${obj[keyPath[lastKeyIndex]]} ${value}`;
    else obj[keyPath[lastKeyIndex]] = value
    
    keyPath.pop()
    keyPath.pop()
  
}

const addElementDetails = (obj, keyPath, value) => {
  // console.log('key to assign: ', KeyToAssign)
  // console.log('key path: ', keyPath)
  // keyPath.forEach(key => {
  //   console.log(key)
  // })
  // keyPath.push(KeyToAssign)
  if (Object.keys(obj).length) {
    lastKeyIndex = keyPath.length-1;
    obj = findObject(obj, lastKeyIndex, keyPath)
    obj[keyPath[lastKeyIndex]] = value;
  } else {
    obj = value
  }
  
}

const countChildren = () => {

}

const findObject = (obj, lastKeyIndex, keyPath) => {
  for (var i = 0; i < lastKeyIndex; ++ i) {
    key = keyPath[i];
    obj = obj[key];
  }

  return obj
}