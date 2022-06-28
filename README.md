# Simple Day Planner

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/jdbeightol/obsidian-simple-day-planner/Release%20Build?logo=github&style=for-the-badge) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/jdbeightol/obsidian-simple-day-planner?style=for-the-badge&sort=semver)

This repository contains a plugin for [Obsidian](https://obsidian.md/) for day planning from a list in a Markdown note.  It was forked from James Lynch's [Obsidian Day Planner](https://github.com/lynchjames/obsidian-day-planner) plugin and serves as a simpler implementation.

What does simple mean?
- This plugin shall not mutate a user's notes i.e.,
    - removed automatic completion of tasks
    - removed mermaid gantt chart support
- This plugin shall leverage Obsidian conventions i.e.,
    - updated file mode to utilize a user's daily note via the Obsidian daily note plugin
    - removed command mode
- This plugin shall enable users to express the structure of their plan i.e.,
    - added support for plan lists without checklists

## Features

- Uses your daily Obsidian note to generate a day plan.
- Status bar updates on progress with information on your current and next tasks. You can click on the status bar to access the note for today's day planner.
- Timeline view showing your tasks laid out on a vertical timeline.

![Day Planner Demo Image](https://raw.githubusercontent.com/jdbeightol/obsidian-simple-day-planner/main/images/day-planner-note-preview.png)

## Usage

Once installed, the plugin will read your daily note as configured by the obsidian daily note plugin to display your daily plan.

### Day Planner Note

Within the note, you can create a list of times and tasks which will be automatically be tracked during the day. You can include headings and other content between tasks.  See [examples/day-planner-example.md](examples/day-planner-example.md) for an example.

The `Day Planner` heading and `---` rule are used to identify the extent of the Day Planner. A heading must be used but can be `#`, `##`, `###` or `####`.

The format of the task list items is important as this is what is used to calculate the times of each task and the intervals between tasks. The format must be one of:

 `- HH:mm Task text` 
 `- [ ] HH:mm Task text`
 
 **24 hour times must be used.** 

 Nested checklist items or bullets are now also supported to capture sub-tasks of a timed task. Timed tasks must be at the top level of the checkbox list.

 `BREAK` and `END` are keywords that define breaks and the end to the time tracking for the tasks. They are not case sensitive so `break` and `end` can also be used.

 `END` is used as an item with a time to give an accurate time interval for the last task, *"Prep for tomorrow's meetings"* at 17:00 in this example.

### Timeline View

The `Show the Day Planner Timeline` command can be used to add a vertical timeline view display the tasks for today's Day Planner with a line showing the current time.

![Day Planner Timeline](https://raw.githubusercontent.com/jdbeightol/obsidian-simple-day-planner/main/images/day-planner-timeline.png)

### Status Bar

The status bar in Obsidian will also show the current progress on the task or break with the time remaining. Clicking on the status bar item will take you to the Day Planner note.

#### Task Status

The status displayed when there is an active task:

![Task Status](https://raw.githubusercontent.com/jdbeightol/obsidian-simple-day-planner/main/images/task-status.png)

#### Break Status

The status displayed during a break:

![Break Status](https://raw.githubusercontent.com/jdbeightol/obsidian-simple-day-planner/main/images/break-status.png)

#### End Status

The status displayed when the end of the tasks is reached:

![End Status](https://raw.githubusercontent.com/jdbeightol/obsidian-simple-day-planner/main/images/end-status.png)

## Configuration

### Status Bar - Circular Progress

You can choose to display progress in the status bar with a circular pie chart progress bar to save horizontal space.

![Circular Progress Bar](https://raw.githubusercontent.com/jdbeightol/obsidian-simple-day-planner/main/images/circular-progress.png)

### Status Bar - Now and Next

You can choose to display the time and start of the text for the current and next task.

![Now and Next](https://raw.githubusercontent.com/jdbeightol/obsidian-simple-day-planner/main/images/now-and-next.png)

### Task Notification

You can choose to have an in-app notification display when a new task starts.

### Timeline Zoom Level

This is the zoom level to dispaly the timeline. The higher the number, the more vertical space each task will take up.

## Compatibility

Custom plugins are only available for Obsidian v0.9.7+.

The current API of this repo targets Obsidian **v0.9.10**.

This plugin depends on the Obsidian Daily Note plugin.

## Installing

## Manual installation

1. Download the [latest release](https://github.com/jdbeightol/obsidian-simple-day-planner/releases/latest)
1. Extract the obsidian-simple-day-planner folder from the zip to your vault's plugins folder: `<vault>/.obsidian/plugins/`  
Note: On some machines the `.obsidian` folder may be hidden. On MacOS you should be able to press `Command+Shift+Dot` to show the folder in Finder.
1. Reload Obsidian
1. If prompted about Safe Mode, you can disable safe mode and enable the plugin.

## For developers
Pull requests are both welcome and appreciated. 😀

If you would like to contribute to the development of this plugin, please follow the guidelines provided in [CONTRIBUTING.md](CONTRIBUTING.md).
