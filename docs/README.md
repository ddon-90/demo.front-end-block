## Name:
Front-end block App

## Description:
Example of custom front-end component manageable via VTEX CMS (Site Editor).

## Proof points:
- Front-end customization
- Site Editor integration (CMS)

## How to demo:

1. Clone/Download this repository and open it with a code editor of your choice, eg. VSCode

2. Open the terminal and login to your VTEX account

```
vtex login {{account}}
```

3. Create a new development workspace or use an existing one

```
vtex use {{workspace}}
```

4. Add the account name as the vendor on `manifest.json` file

```
{
  "name": "front-end-block",
  "vendor": "{{account}}",
  "version": "0.0.1",
  "title": "VTEX IO App Example",
  "description": "Example of custom front-end component manageable via VTEX CMS (Site Editor).",
  "mustUpdateAt": "2018-01-04",
  ...
  ...
}
```

5. Link the project

```
vtex link
```

6. After the linking, add the App as a dependency on the Store theme `manifest.json` file

7. Add the new front-end component on the Store theme `homepage.jsonc` file

8. Link the Store theme project

9. Navigate to the Storefront and show the new component on the homepage

10. Open the Site Editor and show that we can edit the properties of the component
