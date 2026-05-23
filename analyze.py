import os, re

dirs = ["content/docs/components/base", "content/docs/components/radix"]

for d in dirs:
    for fname in sorted(os.listdir(d)):
        if not fname.endswith(".mdx"):
            continue
        path = os.path.join(d, fname)
        with open(path) as f:
            content = f.read()
        
        # Find text between ### headings and <ComponentPreview
        sections = re.findall(r'### ([^\n]+)\n\n([^\n<]+(?:\n[^\n<]+)*)', content)
        english_sections = [(h, desc.strip()) for h, desc in sections if re.search(r'[a-z]{3}', desc)]
        if english_sections:
            print(f"\n{d}/{fname}:")
            for h, desc in english_sections[:5]:
                print(f"  ### {h}")
                print(f"    {desc[:100]}")
