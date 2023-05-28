[![Tests](https://github.com/cadojo/SPICEApplications.jl/workflows/UnitTests/badge.svg)](https://github.com/cadojo/SPICEApplications.jl/actions?query=workflow%3AUnitTests)
[![Docs](https://github.com/cadojo/SPICEApplications.jl/workflows/Documentation/badge.svg)](https://cadojo.github.io/SPICEApplications.jl)
[![SciML Code Style](https://img.shields.io/static/v1?label=Style&message=SciML&color=9668e2&labelColor=3E474F)](https://github.com/SciML/SciMLStyle)

# `SPICEApplications`

_Generate ephemeris kernel files using NASA JPL's `SPICEApplications` program,
all from within Julia!_

**Please consider all minor changes breaking until `v1.0`!**

> **Warning**
>
> This package is not affiliated with or endorsed by NASA, JPL, Caltech, or any
> other organization! This is an independently written package by an
> astrodynamics hobbyist.

## Installation

Choose one of the following two lines!

```julia
import Pkg; Pkg.add("SPICEApplications");
```

```julia
]add SPICEApplications # in Julia's REPL
```

## Envisioned Usage

```julia
using SPICEApplications
using Dates
using SPICE
using HorizonsEphemeris

ephemeris("earth", now() - Year(10), now() + Year(10), Day(1); file="earth.csv")
kernel = mkspk("earth.csv")
furnsh(kernel)
```

## Credits

NASA JPL developed and maintains the
[NAIF SPICE Toolkit](https://naif.jpl.nasa.gov/naif/toolkit.html), including
`SPICEApplications`. Helge Eichhorn developed and maintains
[`SPICE.jl`](https://github.com/JuliaAstro/SPICE.jl), as well as the
[Julia wrappers](https://juliahub.com/ui/Packages/CSPICE_jll/XJqVo/67.0.0+0)
around the SPICE Toolkit.
