# What is a Release?

A **release** is a snapshot of your code at a specific point in time that you distribute to users.

## Release Steps

| Step                    | What Happens                                            | Required?                   |
| ----------------------- | ------------------------------------------------------- | --------------------------- |
| **1. Version Bump**     | Update `package.json` version (e.g., `0.1.0` → `0.2.0`) | ✅ Yes                      |
| **2. Changelog Update** | Document what changed in this version                   | ✅ Yes                      |
| **3. Git Tag**          | Create a tag like `v0.2.0` pointing to that commit      | ✅ Yes                      |
| **4. Build**            | Run `ng build nimbus-ui` to create distributable files  | ✅ Yes                      |
| **5. Publish to npm**   | Run `npm publish` to upload to the npm registry         | ✅ Yes                      |
| **6. GitHub Release**   | Create a release on GitHub with release notes           | 🟡 Optional but recommended |

---

## Git Tags Explained

A **tag** is a permanent marker on a specific commit. Unlike branches, tags don't move.

```bash
# Create a tag
git tag v0.1.0

# Push tags to GitHub
git push origin v0.1.0
# or push all tags
git push --tags
```

**Why tags matter:**

- Users can reference exact versions (`npm install nimbus-ui@0.1.0`)
- GitHub shows tags in the "Releases" section
- Easy to checkout old versions for debugging

---

## Typical Release Workflow

```bash
# 1. Update CHANGELOG.md with new version notes

# 2. Bump version in package.json
npm version patch   # 0.1.0 → 0.1.1
npm version minor   # 0.1.0 → 0.2.0
npm version major   # 0.1.0 → 1.0.0
# This automatically creates a git commit + tag!

# 3. Push code and tags
git push && git push --tags

# 4. Build the library
ng build nimbus-ui

# 5. Publish to npm
cd dist/nimbus-ui
npm publish
```

---

## Key Terms

| Term        | Meaning                                                       |
| ----------- | ------------------------------------------------------------- |
| **Version** | The number in `package.json` (e.g., `0.1.0`)                  |
| **Tag**     | A Git marker pointing to a specific commit (e.g., `v0.1.0`)   |
| **Build**   | The compiled output in `dist/nimbus-ui`                       |
| **Publish** | Uploading the build to npm for public consumption             |
| **Release** | The full process: version + changelog + tag + build + publish |
