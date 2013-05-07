module ApplicationHelper

	def sortable(column, title=nil)
		title ||= column.titleize
		css_class = column == sort_column ? "small button secondary disabled round" : "small button secondary round"
		direction= column== sort_column && sort_direction == "asc" ? "desc" : "asc"
		link_to title, params.merge(:sort => column, :direction => direction, :page=>nil), {:class=>css_class}
	end
end
