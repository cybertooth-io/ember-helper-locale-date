# Deployment

## Addon To NPM

`yarn publish`

## Docs

Typically run:

```bash
$ ./node_modules/.bin/ember deploy production
```

If you need to force the current branch to be the LATEST:
```bash
$ ADDON_DOCS_UPDATE_LATEST=true ./node_modules/.bin/ember deploy production
```
