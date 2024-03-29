get react icons from https://react-icons.github.io

### Setting Up Prisma

After installing prisma, run `npx prisma init` to initialise it.

### Component Library -> Radix UI

This is what we used as the component library for the Theme
<ThemePanel /> in RadixUI when added to the root layout can be used to preview the theme pallete

It is also important to note that radix-ui overrides the default font so we have to add an extra config to be able to use the next/font/google. check the documentation here https://www.radix-ui.com/themes/docs/theme/typography to be able to do this.

### SimpleMDE

This is what we used for the MarkdownEditor, it also has spell checking by default and has lots of customisations. https://www.npmjs.com/package/react-simplemde-editor

### Prisma

When using prisma, we don't have to specifically define types after we have created a migration, their types are automatically generated. an example of where the prisma type was used is in the components/IssueStatusBadge.tsx Props interface `status`

### delay

delay is used to simulate a slow server in order to properly test the loading skeleton.

### Link(s)

The Link component from `next/link` is the most ideal for client-side navigation without reloading the page, the Link component from Radix UI gives a full page reload, but its advantage is that it provides the Link style that the general them of the project uses thereby providing consistency across board. Hence the need to develop a custom Link component that uses both.

### Single Responsibility Principle

refer to app/issues/[id]/page.tsx to see how Single Responsibility Principle is implemented, where the page.tsx file is just reponsible for the layout and the IssueDetails.tsx and EditIssueButton.tsx are abstracted for their respective responsibilities.

Note: we use \_ before \_components to remove the folder out of our routing system for folders we don't want to be in our routing system, so even if we use page.tsx in it, nextjs won't add it to our routing system.

### Disabling caching

You would want to disable caching for pages that you want to render up to date data like the pages in the /issues route. if you don't disable caching, if you create a new issue and are redirected back to the /issues page you won't see the new issue you created even if you refresh the page, because the page in that route is => ○ (Static) prerendered as static content.

#### options available for disabling static route

`force-dynamic` has to be exported with the named const variable `dynamic`. this tells nextjs to opt out of static rendering.

export const `revalidate` you provide a numerical value in seconds that the page should be revalidated.
