# Versioning Strategy

Nimbus UI follows [Semantic Versioning (SemVer)](https://semver.org/) for all releases.

## Version Format

```
MAJOR.MINOR.PATCH
```

| Version   | When to Bump                        | Example                                                        |
| --------- | ----------------------------------- | -------------------------------------------------------------- |
| **MAJOR** | Breaking changes                    | Renaming selectors, removing inputs, changing default behavior |
| **MINOR** | New features (backwards compatible) | New component, new input/output, new variant                   |
| **PATCH** | Bug fixes                           | CSS fix, a11y fix, documentation fix                           |

---

## Pre-1.0 (Current Phase)

While in `0.x.x`, the library is considered **unstable**. Breaking changes may occur in minor version bumps.

```
0.1.0 → Initial development release
0.2.0 → New components added
...
0.9.0 → Feature complete, pre-release testing
1.0.0 → First stable public release
```

---

## What Counts as a Breaking Change?

A **MAJOR** version bump is required when:

- A component is removed
- A component selector is renamed (e.g., `nim-button` → `nimbus-button`)
- An `@Input()` or `@Output()` is removed or renamed
- Default behavior changes in a way users depend on
- Angular version support is dropped

---

## What Counts as a Feature?

A **MINOR** version bump is required when:

- A new component is added
- A new `@Input()` or `@Output()` is added to an existing component
- A new CSS custom property is added for theming
- A new variant, size, or option is added

---

## What Counts as a Fix?

A **PATCH** version bump is required when:

- A bug is fixed
- A CSS issue is corrected
- An accessibility issue is resolved
- Performance is improved (with no API change)
- Documentation is updated

---

## Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/) to enable automated changelog generation:

```
feat(button): add loading state indicator
fix(input): correct focus ring color on Safari
docs(readme): update installation instructions
BREAKING CHANGE: rename nim-btn selector to nim-button
```

### Commit Types

| Type       | Description                              |
| ---------- | ---------------------------------------- |
| `feat`     | New feature                              |
| `fix`      | Bug fix                                  |
| `docs`     | Documentation only                       |
| `style`    | Code style (formatting, no logic change) |
| `refactor` | Code refactor (no feature or fix)        |
| `test`     | Adding or updating tests                 |
| `chore`    | Build, tooling, or dependency updates    |

---

## Release Schedule

- **Pre-1.0**: Releases as needed during active development
- **Post-1.0**: Regular releases with changelog updates
