using Documenter, SPICEApplications

makedocs(
    sitename="SPICEApplications",
    format=Documenter.HTML(),
    modules=[SPICEApplications]
)

deploydocs(
    target="build",
    repo="github.com/cadojo/SPICEApplications.jl.git",
    branch="gh-pages",
    devbranch="main",
    versions=["stable" => "v^", "manual", "v#.#", "v#.#.#"],
)
