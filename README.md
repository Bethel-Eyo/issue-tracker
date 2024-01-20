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
