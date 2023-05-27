"""
Call all SPICE Utilities from within Julia!

!!! warning
    This package is not affiliated with or endorsed by NASA, JPL, Caltech, or any
    other organization! This is an independently written package by an
    astrodynamics hobbyist.

# Extended help

## README

$(README)

## License
$(LICENSE)

## Exports
$(EXPORTS)

## Imports
$(IMPORTS)
"""
module SPICEApplications

export
    brief,
    chronos,
    ckbrief,
    commnt,
    simple,
    states,
    subpt,
    tictoc,
    dskbrief,
    dskexp,
    frmdiff,
    inspekt,
    mkdsk,
    mkspk,
    msopck,
    spacit,
    spkdiff,
    spkmerge,
    tobin,
    toxfr,
    version

using Tables
import CSPICE_jll

using DocStringExtensions
include("docstrings.jl")

"""
BRIEF is a command-line utility program that displays a contents and time coverage summary for one or more binary SPK or binary PCK files.
"""
function brief() end


"""
CHRONOS is a command-line program that converts between several time systems and time formats.
"""
function chronos() end


"""
CKBRIEF is a command-line utility program that displays a contents and time coverage summary for one or more binary CK files.
"""
function ckbrief() end


"""
COMMNT is a command-line program that reads, adds, extracts, or deletes comments from SPICE binary kernel files.
"""
function commnt() end


"""
DSKBRIEF is a command-line utility program that displays a summary of the spatial coverage and additional attributes of one or more binary Digital Shape Kernel (DSK) files.
"""
function dskbrief() end


"""
DSKEXP is a command-line program that exports data from DSK files to text files.
"""
function dskexp() end


"""
FRMDIFF is a program that samples orientation of a reference frame known to SPICE or computes differences between orientations of two reference frames known to SPICE, and either displays this orientation or these differences, or shows statistics about it or them.
"""
function frmdiff() end


"""
INSPEKT is an interactive program that examines the contents of an events component (ESQ) of an E-kernel.
"""
function inspekt() end


"""
MKDSK is a utility program that creates a SPICE Digital Shape Kernel (DSK) file from a text file containing shape data for an extended object.
"""
function mkdsk() end


"""
MKSPK is a program that creates an SPK file from a text file containing trajectory information.
"""
function mkspk(setup=nothing; input=nothing, output=nothing, append=false)

    args = String[]
    !isnothing(setup) && append!(args, ("-setup", String(setup)))
    !isnothing(input) && append!(args, ("-input", String(input)))
    !isnothing(output) && append!(args, ("-output", String(output)))
    append && push!(args, "-append")

    run(`$(CSPICE_jll.mkspk()) $args`)

end


"""
MSOPCK is a command-line program that converts attitude data provided in a text file as UTC, SCLK, or ET-tagged quaternions, Euler angles, or matrices, optionally accompanied by angular velocities, into a type 1, 2, or 3 SPICE C-kernel.
"""
function msopck() end


"""
SPACIT is an interactive program that converts kernels in transfer format to binary format, converts binary kernels to transfer format, and summarizes the contents of binary kernels.
"""
function spacit() end


"""
SPKDIFF provides means for comparing the trajectories of two bodies or sampling the trajectory of a single body using data from SPICE kernels.
"""
function spkdiff() end


"""
SPKMERGE is a program that subsets or merges one or more SPK files into a single SPK file.
"""
function spkmerge() end


"""
TOBIN is a command-line program that converts transfer format SPK, CK, PCK, DSK and EK files to binary format.
"""
function tobin() end


"""
TOXFR is a command-line program that converts binary format SPK, CK, PCK, DSK and EK files to transfer format.
"""
function toxfr() end


end # module SPICEApplications
