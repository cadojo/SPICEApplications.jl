# `SPICEApplications.jl`

_All SPICE Utility programs!_

The SPICE Toolkit is available within Julia through the excellent
[`SPICE.jl`](https://github.com/JuliaAstro/SPICE.jl) package. The JPL SPICE
Toolkit also provides executables for interacting with SPICE kernels, such as
`mkspk`, `brief`, and others. `SPICEApplications.jl` provides idiomatic Julia
interfaces to these executables, which themselves are packaged by
`CSPICE_jll.jl`.

!!! warning
    This project is not affiliated with or endorsed by NASA, JPL, Caltech, or
    any other organization!

## Usage

For a concrete usage example, see how `SPICEApplications` is used to 
[generate](https://github.com/cadojo/SPICEKernels.jl/blob/main/gen/make.jl) 
docstrings for [`SPICEKernels.jl`](https://github.com/cadojo/SPICEKernels.jl),
and consult the 
[SPICE Toolkit Documentation](https://naif.jpl.nasa.gov/naif/utilities.html).
