# Button

A button consist of these props

- `type`: primary | secondary | download
- `classes`:  accepts CSS classNames as string
- `title`: ex "Edit",
- `icon`: See the Icon component for available icons
- `disabled`: true/false


```code
lang: jsx
---
<Button
  title="Endre"
  icon="edit"
  disabled={false}
  onClick={() => func()}
/>

```
# Plain html button
### Primary button
```html
  <button class="button button--primary">
    Primary button
  </button>
```

### Secondary button
```html
  <button class="button button--secondary">
    Scondary button
  </button>
```
### Alternative button
```html
  <button class="button button--alternative">
    Alternative button
  </button>
```

### Action button
```html
  <button class="button button--action">
    Action button
  </button>

  <button class="button button--action button--action-inverted">
    Action button inverted
  </button>

  <button class="button button--action button--action-border">
    Action button with border
  </button>

<button class="button button--action button--action-border button--icon-edit">
    Action button with icon and border
  </button>
```

### Disabled button
```html
  <button class="button button--primary" disabled>
    Disabled button
  </button>
```

### Buttons with icons
```html
  <button class="button button--action button--icon-download">download</button>
  <button class="button button--action button--icon-edit">edit</button>
  <button class="button button--action button--icon-search">search</button>
  <button class="button button--action button--icon-filter">filter</button>
  <button class="button button--action button--icon-adress">adress</button>
  <button class="button button--action button--icon-arrowDown">arrowDown</button>
  <button class="button button--action button--icon-arrow">arrow</button>
  <button class="button button--action button--icon-cal">cal</button>
  <button class="button button--action button--icon-close">close</button>
  <button class="button button--action button--icon-home">home</button>
  <button class="button button--action button--icon-logout">logout</button>
  <button class="button button--action button--icon-notification">notification</button>
  <button class="button button--action button--icon-phone">phone</button>
  <button class="button button--action button--icon-post">post</button>
  <button class="button button--action button--icon-repeat">repeat</button>
  <button class="button button--action button--icon-search">search</button>
  <button class="button button--action button--icon-see">see</button>
  <button class="button button--action button--icon-trash">trash</button>
  <button class="button button--action button--icon-burgerMenu">burgerMenu</button>
  <button class="button button--action button--icon-chevron">chevron</button>
  <button class="button button--action button--icon-email">email</button>
  <button class="button button--action button--icon-plus">plus</button>
  <button class="button button--action button--icon-secondaryMenu">secondaryMenu</button>
  <button class="button button--action button--action-border button--icon-secondaryMenu">secondaryMenu</button>

```

# Button as a react component

### Primary button [React]
```react
  state: {foo: 0}
  ---
  <Button
    title="Hit me"
    onClick={() => alert("You clicked me!")}
  />
```

### Action button [React]
```react
  state: {foo: 0}
  ---
  <div>
    <Button
      type="action"
      icon=""
      title="Do eet!"
      onClick={() => alert("OKAY!")}
    />
    <Button
      type="action"
      icon="edit"
      title="Endre"
      onClick={() => alert("Endre")}
    />
    <Button
      type="action"
      icon="trash"
      title="Slett"
      onClick={() => alert("Slett")}
    />
    <Button
      type="action"
      icon="close"
      title="Lukk"
      onClick={() => alert("Lukk")}
    />
  </div>
```
