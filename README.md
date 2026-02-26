# Monkey test AI

## Usage in short

settings:

```
# copy
cp env.toml.example env.toml # and edit
```

on coding agent prompt:

```
Run workflow of AGETNS.md
```

**When using claude**

Plan on Opus:

```
Run overview-skill and plan-skill
```

Test on Sonnet:

```
Run test-skill
```

## Testing

```
cp env.toml.example env.toml
cd test_webapp; npm run dev
```

at env.toml

```
[project_name]
name = "mock_webapp"

[target]
url_base = "http://localhost:5173"
project_root_path = "./__test_webapp"
```

# LICENSE

MIT

## Disclaimer

Refer to [LICENSE](./LICENSE).