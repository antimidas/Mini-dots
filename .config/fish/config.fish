if status is-interactive
    # Commands to run in interactive sessions can go here

set -g fish_greeting

function fish_greeting
    echo Hello friend!
    echo The time is (set_color yellow)(date +%T)(set_color normal) and this machine is called $hostname
end

end
starship init fish | source

#alias cp='rsync --archive --modify-window=2 --progress --verbose --itemize-changes --stats --human-readable'
alias cp='pycp -g -p'
